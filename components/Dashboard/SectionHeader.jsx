const SectionHeader = ({ title, actionText = "View More", onAction }) => {
    return (
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-[#141B34]">{title}</h3>
            <button
                className="px-5 py-[10px] text-[10px] font-medium bg-linear-to-b from-[#5C8FF7] to-[#276AEE] text-[#FFFFFF]  rounded-full  transition-colors"
                onClick={onAction}
            >
                {actionText}
            </button>
        </div>
    );
};

export default SectionHeader;
