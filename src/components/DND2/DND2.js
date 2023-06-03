import React, {useState} from "react";
import "./DND2.css";

function DND2() {
    const [list1, setList1] = useState(['item1', 'item2']);
    const [list2, setList2] = useState(['item3', 'item4', 'item5']);
    const [list3, setList3] = useState(['item6','item7']);

    let dragItem = null;
    let setSource = null;

    function DragItem({title, setList}) {
        return (
            <>
                <div
                    key={title}
                    className="dragItem"
                    draggable={true}
                    onDragStart={(e) => {
                        dragItem = title;
                        setSource = setList;
                        console.log('onDragStart '+title+" "+setSource);
                    }}
                    onDragEnd={(e) => console.log("onDragEnd")}
                    id={title}
                >
                    {title}
                </div>
            </>
        );
    }

    function DragTarget({list, setList, id}) {
        return (
            <div
                key={id}
                className="dragTarget"
                onDragEnter={(e) => console.log("onDragEnter")}
                onDragLeave={(e) => console.log("onDragLeave")}
                onDragOver={(e) => {
                    e.preventDefault();
                    console.log("onDragOver");
                }}
                id={id}
                onDrop={(e) => {
                    console.log(`onDrop: ${dragItem} :: ${e.target.id}`);
                    if(setSource !== setList) {
                        setSource(prevState => prevState.filter(item => item !== dragItem));
                        setList(prevState => ([...prevState, dragItem]));
                    }
                }}
            >
                {list.map(item => (<DragItem key={item} title={item} setList={setList}/>))}
            </div>
        );
    }

    return (
        <div className="listBox">
            <DragTarget list={list1} setList={setList1} id="drag1"/>
            <DragTarget list={list2} setList={setList2} id="drag2" />
            <DragTarget list={list3} setList={setList3} id="drag3" />
        </div>
    );
}

export default DND2;
