import {render} from '@testing-library/react'
import Section from '../../src/Components/Section'
test('shows the component activated color on selection', () => {
    const mockChangeIndex = jest.fn();

    const { getByTestId } = render(
        <Section
            icon="someIcon"
            name="Some Name"
            color="blue"
            position="middle"
            small={false}
            nextColor="red"
            activeIndexes={[1]}
            index={1}
            changeIndex={mockChangeIndex}
        />
    )

    const section = getByTestId('section');
    const divider = getByTestId('divider');
    expect(section).toHaveStyle('backgroundColor: blue');
    expect(divider).toHaveStyle('backgroundColor: red');
})
