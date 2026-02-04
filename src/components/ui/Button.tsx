type ButtonProps = {
    label: string,
    variant?: 'primary' | 'secondary' | 'CTA',
    onClick?: () => void,
};

export function Button( { label, variant = 'primary', onClick } : ButtonProps ) {
    const styles = {
        primary: 'bg-blue-400 text-white hover:bg-blue-500',
        secondary: 'bg-white text-blue-600',
        CTA: 'bg-[#FFDE00] text-black text-2xl hover:bg-[#B3A125]'
    }

        return (
            <button 
                className={ `${variant === 'CTA' ? 'w-full h-full' : 'w-32'} px-4 py-2 rounded-lg transition ${styles[variant]}` }
                onClick={onClick}
            >
                { label }
            </button>
        )
};  