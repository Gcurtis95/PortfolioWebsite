export const slideUp = {

    initial: {

        y: "0%"

    },

    open: (i) => ({

        y: 0,

        transition: {duration: 0.5, delay: 0.01 * i}

    }),

    closed: {

        y: "100%",

        transition: {duration: 0.5}

    }

}


