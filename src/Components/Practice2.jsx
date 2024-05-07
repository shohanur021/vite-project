

const Practice2 = (props) => {
    
    return (
        <div>
            <h1>{props.title}</h1>
            
            <ul>
                <li>Name: {props.item['name']}</li>
                <li>Age: {props.item['age']}</li>
                <li>salary: {props.item['salary']}</li>
            </ul>

        </div>
    );
};

export default Practice2;