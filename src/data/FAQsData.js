

const FAQsData = [

    {
        id: 1,
        btn_class: "accordion-button fw-bold fs-5",
        data_bs_target: "#panelsStayOpen-collapseOne",
        aria_expanded: true,
        aria_controls: "panelsStayOpen-collapseOne",
        title: "How to create a note?",
        panelsId: "panelsStayOpen-collapseOne",
        panels_class: "accordion-collapse collapse show",
        text: `Getting started with your notes is a breeze! 
                Simply click the 'Create Note' button to kick off the process. 
                A handy editor will pop up, where you can give your note a title and jot down your thoughts in the note field. 
                Don't forget to pick a category for your note – just select your preferred one from the dropdown menu.
                Once you've poured your ideas onto the screen, hit the 'Add New Note' button. Voilà! Your note is created, 
                and you'll find yourself seamlessly taken to the list of all your notes. It's that easy! Now you can manage, 
                organize, and stay on top of your notes effortlessly. 
                In the bottom of your note card you can find the date and time when the note was created.`,
    },

    {
        id: 2,
        btn_class: "accordion-button collapsed fw-bold fs-5",
        data_bs_target: "#panelsStayOpen-collapseTwo",
        aria_expanded: false,
        aria_controls: "panelsStayOpen-collapseTwo",
        title: "How to mark the note done?",
        panelsId: "panelsStayOpen-collapseTwo",
        panels_class: "accordion-collapse collapse",
        text: `Celebrating a completed task is a breeze! 
            Just click on the header of your note card. 
            Watch as the title and text get a stylish strikethrough, 
            signaling that the job is done. Not only that, but the header also changes color, 
            and the 'In Progress' text magically transforms into 'Done.' 
            It's a visual celebration of your achievements right at your fingertips! 
            In the done mode you cannot edit the note!`,
    },

    {
        id: 3,
        btn_class: "accordion-button collapsed fw-bold fs-5",
        data_bs_target: "#panelsStayOpen-collapseThree",
        aria_expanded: false,
        aria_controls: "panelsStayOpen-collapseThree",
        title: "How to edit the note?",
        panelsId: "panelsStayOpen-collapseThree",
        panels_class: "accordion-collapse collapse",
        text: `Ready to make some updates to your note? 
                Look for the 'Edit' button—it's the one with a pen and square icon. 
                Click on that, and a note editor will pop up, giving you the freedom to tweak the note title, 
                adjust the text, and even switch up the category. 
                It's like giving your note a makeover, and it's as easy as a few clicks!`,
    },

    {
        id: 4,
        btn_class: "accordion-button collapsed fw-bold fs-5",
        data_bs_target: "#panelsStayOpen-collapseFour",
        aria_expanded: false,
        aria_controls: "panelsStayOpen-collapseFour",
        title: "How to delete the note?",
        panelsId: "panelsStayOpen-collapseFour",
        panels_class: "accordion-collapse collapse",
        text: `Ready to tidy up your notes? 
            Just find the button with the trash icon and give it a click. 
            A confirmation window will pop up, giving you the option to either hit 'Delete' if you're sure, 
            or 'Cancel' if you want to keep your note safe and sound. 
            Cleaning up has never been this simple!`,
    },

];

export default FAQsData;