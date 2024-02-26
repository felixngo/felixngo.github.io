import {render, fireEvent, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SideNavItem from "../../src/Components/SideNavItem.tsx"; // For additional matchers

describe('SideNavItem', () => {
    it('renders without errors', () => {
        render(
            <SideNavItem
                text="Item Text"
                color="blue"
                icon="check"
                onSelect={() => {}}
                onDelete={() => {}}
            />
        );
    });

    it('calls onSelect when clicked', () => {
        const onSelectMock = jest.fn();
        render(
            <SideNavItem
                text="Item Text"
                color="blue"
                icon="check"
                onSelect={onSelectMock}
                onDelete={() => {}}
            />
        );

        fireEvent.click(screen.getByText('Item Text'));
        expect(onSelectMock).toHaveBeenCalled();
    });

    it('calls onDelete when trash icon is clicked', async () => {
        const onDeleteMock = jest.fn();
        const {container} = render(
            <SideNavItem
                text="Item Text"
                color="blue"
                icon="check"
                onSelect={() => {}}
                onDelete={onDeleteMock}
            />
        );

        const sideNavItem = container.getElementsByClassName("sideNavItem")
        expect(sideNavItem.length).toBe(1)

        await userEvent.hover(sideNavItem[0])

        const trashButton = container.getElementsByClassName('trashPanel')
        expect(trashButton.length).toBe(1)

        fireEvent.click(trashButton[0]);
        expect(onDeleteMock).toHaveBeenCalled();
    });
});
