import Image from "next/image"

import loadingIcon from '../../../public/gifs/loading/loading.gif'

export const Loading = () => {
    return (
        <div className='w-full flex justify-center'>
            <Image className='w-28' alt='loading-icon' src={loadingIcon} />
        </div>
    )
}

