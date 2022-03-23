import React, { useState } from 'react'

const ListComponents = () => {
    const [users, setUsers] = useState([
        { name: "홍길동1", age: "32", height: "155" }
        , { name: "홍길동2", age: "41", height: "244" }
        , { name: "홍길동3", age: "23", height: "144" }
    ])

    return (
        <div>
            {
                users.map(({ name, age, height }, index) => {
                    return (
                        <p key={index}>{index+1}. 이름 : {name} 나이 : {age} 키 : {height}</p>
                    );
                })
            }
            <a href='/'>홈</a>&nbsp;&nbsp;&nbsp;
            <a href='/test'>이동</a>
        </div>
    );
}

export default ListComponents
