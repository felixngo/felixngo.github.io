import {render} from '@testing-library/react'
import {AppConstants} from "../../src/Utils/AppConstants.ts";
import BreadcrumbComponent from "../../src/Components/Breadcrumb.tsx";

describe('Breadcrumb component', () => {
    const prop = [
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

    it('should renders without crashing', () => {
        const { container } = render (
            <BreadcrumbComponent statuses={prop} selected={1}/>
        );
        expect(container).toBeInTheDocument();
    });

    it('Should only select the selected index', () => {
        const { container } = render (
            <BreadcrumbComponent statuses={prop} selected={1}/>
        );
        const sections = container.getElementsByClassName('section');
        expect(sections[0]).not.toHaveClass('active');
        expect(sections[1]).toHaveClass('active');
        expect(sections[2]).not.toHaveClass('active');
    });
});