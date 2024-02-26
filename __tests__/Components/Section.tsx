import {render} from '@testing-library/react'
import Section from '../../src/Components/Section'

describe('Section component', () => {
    it('should renders without crashing', () => {
        const mockChangeIndex = jest.fn();
        const {container} = render(
            <Section
                icon="check"
                name="Some Name"
                color="blue"
                position="middle"
                small={false}
                nextColor="red"
                activeIndexes={[1]}
                index={1}
                changeIndex={mockChangeIndex}
            />
        );
        expect(container).toBeInTheDocument();
    });

    it('should color the section', () => {
        const mockChangeIndex = jest.fn();
        const {container} = render(
            <Section
                icon="check"
                name="Some Name"
                color="blue"
                position="middle"
                small={false}
                nextColor="red"
                activeIndexes={[1]}
                index={1}
                changeIndex={mockChangeIndex}
            />
        );

        expect(container.getElementsByClassName('WorkflowStatusIndicator').length).toBe(1);
        const section = container.getElementsByClassName('WorkflowStatusIndicator')[0];
        expect(section).toHaveStyle('backgroundColor: blue');
    })

    it('should color the chevron', () => {
        const mockChangeIndex = jest.fn();
        const {container} = render(
            <Section
                icon="check"
                name="Some Name"
                color="blue"
                position="middle"
                small={false}
                nextColor="red"
                activeIndexes={[1]}
                index={1}
                changeIndex={mockChangeIndex}
            />
        );

        expect(container.getElementsByClassName('chevron').length).toBe(1);

        const divider = container.getElementsByClassName('chevron')[0];
        expect(divider.getAttribute('fill')).toBe('blue');
    })
})
