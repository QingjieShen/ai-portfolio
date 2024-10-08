export default function GitHubLogo({color} : {color: string}) {

    return (
        <svg
            aria-describedby="desc"
            aria-labelledby="title"
            role="img"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            >
            <title>
                Github
            </title>
            <desc>
                A line styled icon from Orion Icon Library.
            </desc>
            <path
                d="M32 1.952a30.019 30.019 0 0 0-9.469 58.5c1.5.281 2.063-.656 2.063-1.406v-5.625c-8.344 1.779-10.125-3.563-10.125-3.563-1.406-3.469-3.375-4.406-3.375-4.406-2.719-1.875.187-1.781.187-1.781 3 .188 4.594 3.094 4.594 3.094 2.719 4.594 7.031 3.281 8.719 2.531a6.5 6.5 0 0 1 1.875-4.031c-6.656-.75-13.688-3.375-13.688-14.812a11.5 11.5 0 0 1 3.094-8.063 11.217 11.217 0 0 1 .281-7.969s2.531-.844 8.25 3.094a28.944 28.944 0 0 1 7.5-1.031 28.4 28.4 0 0 1 7.5 1.031c5.719-3.844 8.25-3.094 8.25-3.094a11.217 11.217 0 0 1 .281 7.969 11.34 11.34 0 0 1 3.094 8.063c0 11.531-7.031 14.063-13.688 14.813a7.262 7.262 0 0 1 2.063 5.534v8.25c0 .844.562 1.687 2.063 1.406A30.019 30.019 0 0 0 32 1.952z"
                data-name="layer1"
                fill={color}
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth={2}
            />
        </svg>
      )
}