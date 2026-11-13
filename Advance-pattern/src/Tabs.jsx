import { useState } from 'react';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("home");

    return (
        <div>
            <div className="tabs">
                <button onClick={() => setActiveTab("home")}>
                    Home
                </button>

                <button onClick={() => setActiveTab("about")}>
                    About
                </button>

                <button onClick={() => setActiveTab("contact")}>
                    Contact
                </button>
            </div>

            <div className="tab-content">
                {activeTab === "home" && <h2>Welcome Home!</h2>}

                {activeTab === "about" && <h2>About Us</h2>}

                {activeTab === "contact" && <h2>Contact Us</h2>}
            </div>
        </div>
    );
};

export default Tabs;