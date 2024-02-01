

const FAQsData = [

    {
        id: 1,
        btn_class: "accordion-button fw-bold",
        data_bs_target: "#panelsStayOpen-collapseOne",
        aria_expanded: true,
        aria_controls: "panelsStayOpen-collapseOne",
        title: "How to create a note?",
        panelsId: "panelsStayOpen-collapseOne",
        panels_class: "accordion-collapse collapse show",
        text: `This is the first item's accordion body.It is shown by default, 
        until the collapse plugin adds the appropriate classNamees that we use to style each element. 
        These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. 
        You can modify any of this with custom CSS or overriding our default variables. 
        It's also worth noting that just about any HTML can go within the accordion-body, 
        though the transition does limit overflow.`,
    },

    {
        id: 2,
        btn_class: "accordion-button collapsed fw-bold",
        data_bs_target: "#panelsStayOpen-collapseTwo",
        aria_expanded: false,
        aria_controls: "panelsStayOpen-collapseTwo",
        title: "How to edit the note?",
        panelsId: "panelsStayOpen-collapseTwo",
        panels_class: "accordion-collapse collapse",
        text: `This is the second item's accordion body It is hidden by default, 
        until the collapse plugin adds the appropriate classNamees that we use to style each element. 
        These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. 
        You can modify any of this with custom CSS or overriding our default variables. 
        It's also worth noting that just about any HTML can go within the accordion-body, 
        though the transition does limit overflow.`,
    },

    {
        id: 3,
        btn_class: "accordion-button collapsed fw-bold",
        data_bs_target: "#panelsStayOpen-collapseThree",
        aria_expanded: false,
        aria_controls: "panelsStayOpen-collapseThree",
        title: "How to delete the note?",
        panelsId: "panelsStayOpen-collapseThree",
        panels_class: "accordion-collapse collapse",
        text: `This is the third item's accordion body It is hidden by default, 
        until the collapse plugin adds the appropriate classNamees that we use to style each element. 
        These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. 
        You can modify any of this with custom CSS or overriding our default variables. 
        It's also worth noting that just about any HTML can go within the accordion-body, 
        though the transition does limit overflow.`,
    },

];

export default FAQsData;