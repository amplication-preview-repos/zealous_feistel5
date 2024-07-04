import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ScrapedDataList } from "./scrapedData/ScrapedDataList";
import { ScrapedDataCreate } from "./scrapedData/ScrapedDataCreate";
import { ScrapedDataEdit } from "./scrapedData/ScrapedDataEdit";
import { ScrapedDataShow } from "./scrapedData/ScrapedDataShow";
import { UserInputList } from "./userInput/UserInputList";
import { UserInputCreate } from "./userInput/UserInputCreate";
import { UserInputEdit } from "./userInput/UserInputEdit";
import { UserInputShow } from "./userInput/UserInputShow";
import { BookDataList } from "./bookData/BookDataList";
import { BookDataCreate } from "./bookData/BookDataCreate";
import { BookDataEdit } from "./bookData/BookDataEdit";
import { BookDataShow } from "./bookData/BookDataShow";
import { CustomDataList } from "./customData/CustomDataList";
import { CustomDataCreate } from "./customData/CustomDataCreate";
import { CustomDataEdit } from "./customData/CustomDataEdit";
import { CustomDataShow } from "./customData/CustomDataShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AIChatbotService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ScrapedData"
          list={ScrapedDataList}
          edit={ScrapedDataEdit}
          create={ScrapedDataCreate}
          show={ScrapedDataShow}
        />
        <Resource
          name="UserInput"
          list={UserInputList}
          edit={UserInputEdit}
          create={UserInputCreate}
          show={UserInputShow}
        />
        <Resource
          name="BookData"
          list={BookDataList}
          edit={BookDataEdit}
          create={BookDataCreate}
          show={BookDataShow}
        />
        <Resource
          name="CustomData"
          list={CustomDataList}
          edit={CustomDataEdit}
          create={CustomDataCreate}
          show={CustomDataShow}
        />
      </Admin>
    </div>
  );
};

export default App;
