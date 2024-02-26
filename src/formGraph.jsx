import React from 'react';

function TreeNode({ value, children }){
    return (
        <li>
            <span>{value}</span>
            <ul>{children}</ul>
        </li>
    )
}

function formGraph(arr){
    // console.log(arr)
    const process = (index) => {
        if (index >= arr.length) return null;
        return (
            <TreeNode key={index} value={arr[index]}>
                {process(2*index+1)}
                {process(2*index+2)}
            </TreeNode>
        )
    }
    return <ul className='tree'>{process(0)}</ul>
}

export default formGraph;
