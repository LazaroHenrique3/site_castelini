import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface IPagination {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination: React.FC<IPagination> = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex justify-center mt-4 space-x-2">
            <button
                className={`px-3 py-1 rounded-lg ${currentPage === 1
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-primary-red text-white hover:bg-red-600'
                    }`}
                onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
            >

                <HiChevronLeft size={20} />
            </button>
            <span className="px-3 py-1 bg-gray-100 rounded-lg">
                Página {currentPage} de {totalPages}
            </span>
            <button
                className={`px-3 py-1 rounded-lg ${currentPage === totalPages
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-primary-red text-white hover:bg-red-600'
                    }`}
                onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
            >
                <HiChevronRight size={20} />
            </button>
        </div>
    );
};