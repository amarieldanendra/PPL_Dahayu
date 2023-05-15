// Komponen Hero untuk landing page
export default function Hero(){
    return(
        <div
            className="w-full aspect-[19/8] bg-[url('/hero.png')] flex items-center justify-center"
        >
            <div
                className="w-4/6 h-1/5 bg-[#EFEFEF] rounded-2xl flex items-center justify-evenly"
            >
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.25 43.75L26.25 29.75C25 30.75 23.5625 31.5417 21.9375 32.125C20.3125 32.7083 18.5833 33 16.75 33C12.2083 33 8.365 31.4267 5.22 28.28C2.075 25.1333 0.501667 21.29 0.5 16.75C0.5 12.2083 2.07333 8.365 5.22 5.22C8.36667 2.075 12.21 0.501667 16.75 0.5C21.2917 0.5 25.135 2.07333 28.28 5.22C31.425 8.36667 32.9983 12.21 33 16.75C33 18.5833 32.7083 20.3125 32.125 21.9375C31.5417 23.5625 30.75 25 29.75 26.25L43.8125 40.3125C44.2708 40.7708 44.5 41.3333 44.5 42C44.5 42.6667 44.25 43.25 43.75 43.75C43.2917 44.2083 42.7083 44.4375 42 44.4375C41.2917 44.4375 40.7083 44.2083 40.25 43.75ZM16.75 28C19.875 28 22.5317 26.9058 24.72 24.7175C26.9083 22.5292 28.0017 19.8733 28 16.75C28 13.625 26.9058 10.9683 24.7175 8.78C22.5292 6.59167 19.8733 5.49833 16.75 5.5C13.625 5.5 10.9683 6.59417 8.78 8.7825C6.59167 10.9708 5.49833 13.6267 5.5 16.75C5.5 19.875 6.59417 22.5317 8.7825 24.72C10.9708 26.9083 13.6267 28.0017 16.75 28Z" fill="#023020"/>
                </svg>
                <input placeholder="What are you looking for?" className="h-4/5 w-4/5 font-dosis text-xl bg-[#EFEFEF] outline-none text-[#023020]" type="text" name="search" id="search" />
            </div>
        </div>
    )
}