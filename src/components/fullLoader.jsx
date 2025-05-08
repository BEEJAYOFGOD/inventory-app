const FullPageSpinner = () => {
    const Spinner = () => {
        return (
            <div className="rounded-full  border-primary border-8  border-dotted  h-18 w-18 animate-spin"></div>
        );
    };

    return (
        <div className="fixed inset-0 bg-white/35 bg-opacity-50 flex items-center justify-center z-50">
            <Spinner />
        </div>
    );
};

export default FullPageSpinner;
