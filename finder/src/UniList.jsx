import{ useState, useEffect } from 'react';
import University from './University.jsx';
import Button from './Button.jsx';

export default function UniList({ universities, handleDelete, fetchUniversities }) {
    const [select, setSelect] = useState(1);

    useEffect(() => {
        fetchUniversities(select);
    }, [select]);

    return (
        <div className="d-flex flex-column" style={{ height: "200vh" }}>
            <div className="d-flex justify-content-center">
                <div className="row row-cols-1 row-cols-md-3 g-4 w-75">
                    {universities.map(university => <University handleDelete={handleDelete} key={university.id} university={university} />)}
                </div>
            </div>
            <div>
                <Button value="1" isSelected={select === 1} onSelect={() => setSelect(1)} />
                <Button value="2" isSelected={select === 2} onSelect={() => setSelect(2)} />
                <Button value="3" isSelected={select === 3} onSelect={() => setSelect(3)} />
                <Button value="4" isSelected={select === 4} onSelect={() => setSelect(4)} />
            </div>
        </div>
    );
}
