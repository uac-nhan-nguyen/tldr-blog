<script lang="ts">
  import {Router, Route, useLocation} from "svelte-navigator";
  import type {MenuItemType} from "./components/MenuItem.svelte";
  import Sidebar from "./components/Sidebar.svelte";
  import HomePage from "./pages/HomePage.svelte";
  import NotFoundPage from "./pages/NotFoundPage.svelte";
  import SettingsPage from "./pages/SettingsPage.svelte";
  import TextCubePage from "./pages/TextCubePage.svelte";
  import TimerPage from "./pages/TimerPage.svelte";
  import NotepadPage from "./pages/NotepadPage.svelte";
  import BlogPage from "./pages/BlogPage.svelte";
  import SandboxPage from "./pages/SandboxPage.svelte";
  import MarkdownPage from "./pages/components/MarkdownPage.svelte";
  import RegexPage from "./pages/tools/RegexPage.svelte";
  import JsonSchemaPage from "./pages/tools/JsonSchemaPage.svelte";
  import DrawChartPage from "./pages/apps/DrawChartPage.svelte";
  import { setLocalStorage } from "utils/LocalStorage";
    import RandomPage from "./pages/tools/RandomPage.svelte";

  setLocalStorage('last-visit', Date.now());

  const menus: MenuItemType[] = [
    [
      "apps",
      null,
      [
        ["notepad", "/notepad", ,],
        ["timer", "/timer", , {hide: true}],
      ],
    ],
    [
      "components",
      null,
      [
        ["textcube", "/text-cube", ,],
        ["mdpage", "/markdown-page", ,],
      ],
    ],
    ["blogs", null, [
      ["cheatsheet", "/blogs/cheatsheet"],
      ["build", "/blogs/build"],
    ]],
    [
      "toolkits",
      null,
      [
        ["regex", "/tools/regex", ,],
        ["random", "/tools/random", ,],
        // ["ts-jsonschema", "/tools/ts-to-json-schema", ,],
        // ['Privacy Policy collections', '/privacy-policy-collections']
      ],
    ],
  ];
</script>

<Router primary={false}>
  <header class="fixed top-0 left-0 w-[100px] md:w-[200px]">
    <Sidebar {menus}/>
  </header>

  <main class="ml-[100px] sm:ml-[120px] md:ml-[200px] pl-4 pr-4 ">
    <Route path="/">
      <HomePage/>
    </Route>

    <!-- Blogs -->
    <Route path="blogs/*">
      <Route path=":id">
        <BlogPage/>
      </Route>
    </Route>

    <!-- Apps -->
    <Route path="timer">
      <TimerPage/>
    </Route>
    <Route path="notepad">
      <NotepadPage/>
    </Route>
    <Route path="draw-chart">
      <DrawChartPage/>
    </Route>

    <!-- Components -->
    <Route path="text-cube">
      <TextCubePage/>
    </Route>
    <Route path="markdown-page">
      <MarkdownPage/>
    </Route>

    <!-- Tools -->
    <Route path="tools/regex">
      <RegexPage/>
    </Route>
    <Route path="tools/random">
      <RandomPage/>
    </Route>
    <Route path="tools/ts-to-json-schema">
      <JsonSchemaPage/>
    </Route>

    <!-- Others -->
    <Route path="settings">
      <SettingsPage/>
    </Route>
    <Route path="sandbox">
      <SandboxPage/>
    </Route>
    <Route path="**">
      <NotFoundPage/>
    </Route>
  </main>
</Router>
