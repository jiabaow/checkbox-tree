import {useState} from "react";

const CheckboxItem = ({ item, level = 0 }) => {
    const [checked, setChecked] = useState(false);

    const hasChildren = item.children && item.children.length > 0;

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <div style={{ marginLeft: level * 20, textAlign: 'left' }}>
            <label>
                <input type="checkbox" checked={checked} onChange={handleChange}/>
                {item.name}
            </label>
            { hasChildren &&
                item.children.map((child, index) => (
                    <CheckboxItem key={index} item={child} level={level+1} />
                ))}
        </div>
    );
};

export default CheckboxItem;
