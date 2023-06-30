        // const heading=React.createElement("h1",{id:"heading"},"HW from React!");

        // const root=ReactDOM.createRoot(document.getElementById("root"));

        // root.render(heading);


        //create element is creating an object(react element) whiule render is converting this code into html by dom
        const parent=React.createElement(
            "div",{id:"parent"},React.createElement("div",{id:"child"},
            [React.createElement("h1",{id:"heading"},"this is div inside div h1"),React.createElement("h2",{id:"heading"},"this is div inside div h2") ]));

        const root=ReactDOM.createRoot(document.getElementById("root"));

        root.render(parent);
