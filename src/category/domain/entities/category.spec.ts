import { Category } from "./category";

describe('Category unit Tests', () => {
    test('constructor of category',()=>{
        // Arrange
        const props = {
            name:'Movie',
            is_active:true,
            description:'Movies',
            created_at:new Date()}
        const category = new Category(props);
        expect(category.props).toMatchObject(props);

        expect(category.props).toStrictEqual(props);
    });


});