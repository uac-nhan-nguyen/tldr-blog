<script lang="ts">
    import { Router, Route, useLocation} from "svelte-navigator";
    import type { MenuItemType } from "./components/MenuItem.svelte";
    import Sidebar from "./components/Sidebar.svelte";
    import MarkdownPage from "./pages/MarkdownPage.svelte";
    import SettingsPage from "./pages/SettingsPage.svelte";
    import TimerPage from "./pages/TimerPage.svelte";


    const menus : MenuItemType[] = [
      ['apps', null, [
        ['timer', '/timer',,{hide:true}]
      ]],
      ['demo', null, [
        // ['markdown', '/markdown']
      ]],
      ['toolkits', null, [
        // ['Privacy Policy collections', '/privacy-policy-collections']
      ]]
    ]
</script>

<Router>
  <header class="fixed top-0 left-0 w-[100px] md:w-[200px]">
    <Sidebar title={'tl.dr.'} menus={menus}/>
  </header>

  <main class="ml-[100px] md:ml-[200px] pl-4 pr-4">

    <Route path="/"> <MarkdownPage url='/home.md'/> </Route>

    <Route path="settings"> <SettingsPage/></Route>
    <Route path="markdown"> <MarkdownPage url='/hello.md'/> </Route>
    <Route path="timer"><TimerPage/></Route>

  </main>
</Router>
