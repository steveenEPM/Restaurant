import Link from "../src/components/Link";
import Container1 from "../src/containers/homes/container1";
import Form2 from "../src/containers/reservar/form2";
import renderer from 'react-test-renderer';


it('changes the class 2 when hovered', () => {


    const element = renderer
        .create(<Link page="https://example.com">Example Site</Link>)
        .toJSON()


    /*
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    */
    expect(element).toMatchInlineSnapshot()




    /*
        // re-rendering
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    
        // manually trigger the callback
        renderer.act(() => {
            tree.props.onMouseLeave();
        });
        // re-rendering
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    */
});