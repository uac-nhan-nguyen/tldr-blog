<script lang="ts">
  import { Router, Route, useLocation } from "svelte-navigator";
  import type { MenuItemType } from "./components/MenuItem.svelte";
  import Sidebar from "./components/Sidebar.svelte";
  import HomePage from "./pages/HomePage.svelte";
  import MarkdownPageComponent from "./components/MarkdownDisplay.svelte";
  import NotFoundPage from "./pages/NotFoundPage.svelte";
  import SettingsPage from "./pages/SettingsPage.svelte";
  import TextCubePage from "./pages/TextCubePage.svelte";
  import TimerPage from "./pages/TimerPage.svelte";
  import NotepadPage from "./pages/NotepadPage.svelte";
  import BlogPage from "./pages/BlogPage.svelte";
  import SandboxPage from "./pages/SandboxPage.svelte";
  import MarkdownPage from "./pages/components/MarkdownPage.svelte";

  const menus: MenuItemType[] = [
    [
      "apps",
      null,
      [
        ["notepad", "/notepad", ,],
        ["timer", "/timer", , { hide: true }],
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
    ["blogs", null, [["cheatsheet", "/blogs/cheatsheet"]]],
    [
      "toolkits",
      null,
      [
        // ['Privacy Policy collections', '/privacy-policy-collections']
      ],
    ],
  ];
</script>

<Router primary={false}>
  <header class="fixed top-0 left-0 w-[100px] md:w-[200px]">
    <Sidebar {menus} />
  </header>

  <main class="ml-[100px] sm:ml-[120px] md:ml-[200px] pl-4 pr-4 ">
    <Route path="/"><HomePage /></Route>

    <!-- Blogs -->
    <Route path="blogs/*">
      <Route path=":id">
        <BlogPage />
      </Route>
    </Route>

    <Route path="timer"><TimerPage /></Route>

    <!-- Components -->
    <Route path="text-cube"><TextCubePage /></Route>
    <Route path="markdown-page"><MarkdownPage /></Route>

    <!-- Others -->
    <Route path="settings"><SettingsPage /></Route>
    <Route path="notepad"><NotepadPage /></Route>
    <Route path="sandbox"><SandboxPage /></Route>
    <Route path="**"><NotFoundPage /></Route>
  </main>
</Router>
