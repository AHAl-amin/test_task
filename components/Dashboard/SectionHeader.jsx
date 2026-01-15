const SectionHeader = ({ title, actionText = "View More", onAction }) => {
    return (
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <button
                className="px-4 py-1.5 bg-linear-to-b from-[#5C8FF7] to-[#276AEE] text-white text-xs font-semibold rounded-full  transition-colors"
                onClick={onAction}
            >
                {actionText}
            </button>
        </div>
    );
};

export default SectionHeader;
