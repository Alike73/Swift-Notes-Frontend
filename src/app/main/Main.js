import Editor from "../editor/Editor";
import Hero from "../hero/Hero";
import Notes from "../notes/Notes";


const Main = () => {

    return (
        <div className="main">
            <Notes />
            <Editor />
            <Hero />
        </div>
    )
};

export default Main;