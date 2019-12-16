import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePage } from "./home.page";

const routes: Routes = [
  {
    path: "home",
    component: HomePage,
    children: [
      {
        path: "chat",
        loadChildren: () =>
          import("../pages/chat/chat.module").then(m => m.ChatPageModule)
      },
      {
        path: "search",
        loadChildren: () =>
          import("../pages/search/search.module").then(m => m.SearchPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRouter {}
