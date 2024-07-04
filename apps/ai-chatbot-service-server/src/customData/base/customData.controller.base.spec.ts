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
import { CustomDataController } from "../customData.controller";
import { CustomDataService } from "../customData.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  extractedEntityType: "exampleExtractedEntityType",
  extractionDate: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
  userProvidedText: "exampleUserProvidedText",
};
const CREATE_RESULT = {
  createdAt: new Date(),
  extractedEntityType: "exampleExtractedEntityType",
  extractionDate: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
  userProvidedText: "exampleUserProvidedText",
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    extractedEntityType: "exampleExtractedEntityType",
    extractionDate: new Date(),
    id: "exampleId",
    updatedAt: new Date(),
    userProvidedText: "exampleUserProvidedText",
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  extractedEntityType: "exampleExtractedEntityType",
  extractionDate: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
  userProvidedText: "exampleUserProvidedText",
};

const service = {
  createCustomData() {
    return CREATE_RESULT;
  },
  customDataItems: () => FIND_MANY_RESULT,
  customData: ({ where }: { where: { id: string } }) => {
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

describe("CustomData", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CustomDataService,
          useValue: service,
        },
      ],
      controllers: [CustomDataController],
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

  test("POST /customData", async () => {
    await request(app.getHttpServer())
      .post("/customData")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        extractionDate: CREATE_RESULT.extractionDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /customData", async () => {
    await request(app.getHttpServer())
      .get("/customData")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          extractionDate: FIND_MANY_RESULT[0].extractionDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /customData/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/customData"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /customData/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/customData"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        extractionDate: FIND_ONE_RESULT.extractionDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /customData existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/customData")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        extractionDate: CREATE_RESULT.extractionDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/customData")
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
