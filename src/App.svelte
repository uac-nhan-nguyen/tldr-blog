<script lang="ts">
    import { Router, Route} from "svelte-navigator";
    import type { MenuItemType } from "./components/MenuItem.svelte";
    import Sidebar from "./components/Sidebar.svelte";
    import MarkdownPage from "./pages/MarkdownPage.svelte";
    import SettingsPage from "./pages/SettingsPage.svelte";
    import TimerPage from "./pages/TimerPage.svelte";

    const menus : MenuItemType[] = [
      ['apps', null, [
        ['settings', '/settings'],
        ['timer', '/timer']
      ]],
      ['demo', null, [
        ['markdown', '/markdown']
      ]],
      ['templates', null, [
        ['Privacy Policy collections', '/privacy-policy-collections']
      ]]
    ]
</script>

<Router>
  <header>
    <Sidebar title={'tldr'} menus={menus}/>
  </header>

  <main>

    <Route path="/"> <h3>Home</h3> </Route>

    <Route path="settings"> <SettingsPage/></Route>
    <Route path="markdown"> <MarkdownPage url='/hello.md'/> </Route>
    <Route path="timer"><TimerPage/></Route>

  </main>
</Router>
