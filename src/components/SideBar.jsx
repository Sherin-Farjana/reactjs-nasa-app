export default function SideBar(props) {
    const { handleToggleModal, data } = props

    return (
        <div className="sidebar">
            {/* Background overlay to close sidebar */}
            <div onClick={handleToggleModal} className="bgOverlay"></div>

            {/* Sidebar content with title, description, and close button */}
            <div className="sidebarContents">
                <h2>{data?.title}</h2>
                <div className="descriptionContainer">
                    <p className="descriptionTitle">{data?.date}</p>
                    <p>{data?.explanation}</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}
