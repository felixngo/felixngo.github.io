import {fireEvent, render, screen} from '@testing-library/react';
import StatusDropdown from "../../src/Components/StatusDropdown.tsx";
import {AppConstants} from "../../src/Utils/AppConstants.ts";

const mockStatuses = [
    {
        icon: "clock",
        name: "Planning",
        color: AppConstants.Colors.RiverBed
    },
    {
        icon: "adjust",
        name: "In Progress",
        color: AppConstants.Colors.Yellow
    },
    {
        icon: "circle",
        name: "Work Complete",
        color: AppConstants.Colors.Orange
    }
];

describe('StatusDropdown Component', () => {
    // it('renders with initial selected status', () => {
    //     const selectedIndex = 1;
    //     const {getByText} = render(
    //         <StatusDropdown statuses={mockStatuses} selectedIndex={selectedIndex}/>
    //     );
    //     expect(getByText(mockStatuses[selectedIndex].name)).toBeInTheDocument();
    // });

    it('updates selected status on dropdown click', () => {
        const {container} = render(<StatusDropdown statuses={mockStatuses} selectedIndex={0}/>);
        const elt = container.getElementsByClassName('StatusDropdown')[0];
        fireEvent.click(elt);
        const options = screen.getAllByRole('option');
        fireEvent.click(options[1]);
        expect(options[1]).toHaveAttribute('aria-checked', 'true');
    });
});