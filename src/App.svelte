<script lang="ts">
  import { Router, Route, useLocation } from "svelte-navigator";
  import type { MenuItemType } from "./components/MenuItem.svelte";
  import Sidebar from "./components/Sidebar.svelte";
  import HomePage from "./pages/HomePage.svelte";
  import MarkdownPage from "./pages/MarkdownPage.svelte";
  import NotFoundPage from "./pages/NotFoundPage.svelte";
  import SettingsPage from "./pages/SettingsPage.svelte";
  import TextCubePage from "./pages/TextCubePage.svelte";
  import TimerPage from "./pages/TimerPage.svelte";
  import NotepadPage from "./pages/NotepadPage.svelte";

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
      ],
    ],
    [
      "blogs",
      null,
      [
        // ['markdown', '/markdown']
      ],
    ],
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
    <Route path="settings"><SettingsPage /></Route>
    <Route path="markdown"><MarkdownPage url="/hello.md" /></Route>
    <Route path="timer"><TimerPage /></Route>
    <Route path="text-cube"><TextCubePage /></Route>
    <Route path="notepad"><NotepadPage /></Route>
    <Route path="**"><NotFoundPage /></Route>
  </main>
</Router>
