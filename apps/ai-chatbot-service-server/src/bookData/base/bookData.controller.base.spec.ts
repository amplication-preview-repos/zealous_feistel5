import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { BookDataController } from "../bookData.controller";
import { BookDataService } from "../bookData.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  bookTitle: "exampleBookTitle",
  contentSummary: "exampleContentSummary",
  createdAt: new Date(),
  id: "exampleId",
  integrationDate: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  bookTitle: "exampleBookTitle",
  contentSummary: "exampleContentSummary",
  createdAt: new Date(),
  id: "exampleId",
  integrationDate: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    bookTitle: "exampleBookTitle",
    contentSummary: "exampleContentSummary",
    createdAt: new Date(),
    id: "exampleId",
    integrationDate: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  bookTitle: "exampleBookTitle",
  contentSummary: "exampleContentSummary",
  createdAt: new Date(),
  id: "exampleId",
  integrationDate: new Date(),
  updatedAt: new Date(),
};

const service = {
  createBookData() {
    return CREATE_RESULT;
  },
  bookDataItems: () => FIND_MANY_RESULT,
  bookData: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("BookData", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BookDataService,
          useValue: service,
        },
      ],
      controllers: [BookDataController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /bookData", async () => {
    await request(app.getHttpServer())
      .post("/bookData")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        integrationDate: CREATE_RESULT.integrationDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /bookData", async () => {
    await request(app.getHttpServer())
      .get("/bookData")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          integrationDate: FIND_MANY_RESULT[0].integrationDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /bookData/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bookData"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /bookData/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/bookData"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        integrationDate: FIND_ONE_RESULT.integrationDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /bookData existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/bookData")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        integrationDate: CREATE_RESULT.integrationDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/bookData")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
