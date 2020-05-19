## Eva Icons

In case you need to have more icons available, OAH UI provides a `oah-eva-icon` pack with 480+ SVG icons.

Install the pack:

```bash
yarn add oah-eva-icon
```

Or

```bash
npm i oah-eva-icon
```

In your Layout page add icons to Layout component

```jsx{4}
import icons from 'oah-eva-icon';

//...
<Layout windowMode evaIcons={icons}>
  <Header changeTheme={changeTheme} toggleSidebar={() => sidebarRef.current?.toggle()} />
  <LayoutContainer>
    <SidebarCustom ref={sidebarRef} />
    <LayoutContent>
      <LayoutColumns>
        <LayoutColumn className="main-content">{props.children}</LayoutColumn>
      </LayoutColumns>
      <LayoutFooter>Footer</LayoutFooter>
    </LayoutContent>
  </LayoutContainer>
</Layout>;
//...
```
