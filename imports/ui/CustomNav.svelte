<script>
    import {
        Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink,
        Dropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem,
        Image,
    } from "sveltestrap";

    let isOpen = true;

    function handleUpdate(event) {
        isOpen = event.detail.isOpen;
    }
</script>

<Navbar color="dark" dark expand="md">
    <NavbarBrand href="/">sveltestrap</NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
        <Nav class="ms-auto" navbar>
            <NavItem>
                <NavLink href="#components/">Components</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="https://github.com/bestguy/sveltestrap"
                    >GitHub</NavLink
                >
            </NavItem>
            <Dropdown nav inNavbar>
                <DropdownToggle nav caret>Options</DropdownToggle>
                <DropdownMenu end>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <NavItem>
                <NavLink href="https://twitter.com">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <img
                        src="https://cdn.discordapp.com/attachments/731849212274147339/852903842063974430/Celica.jpg"
                        class="rounded-circle"
                        height="30"
                    />
                </NavLink>
            </NavItem>
        </Nav>
    </Collapse>
</Navbar>
