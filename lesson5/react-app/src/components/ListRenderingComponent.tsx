// Define the ListRenderingComponent which takes a 'items' prop
type Props = { items?: string[] }
const ListRenderingComponent = ({ items=[] }: Props) => {

    return (
        <div>
            <h2>List of Items</h2>
            <ul>

                {

                    items.map((item, index) => <li key={index}>{item}</li>
                    )

                }

            </ul>
        </div>
    );
};

export default ListRenderingComponent;