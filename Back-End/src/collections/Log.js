/** @type {import('payload/types').CollectionConfig} */
const Log = {
    slug: "log",
    access: {
        read: () => true,
        create: () => true,
        update: () => true,
        delete: () => true
    },
    fields: [
        {
            name: 'collectionName',
            type: 'text',
            required: true,
            label: 'Collection Name'
        },
        {
            name: 'action',
            type: 'text',
            required: true,
            label: 'Action'
        },
        {
            name: "timestamp",
            type: "date",
            required: true
        },
        {
            name: "Status",
            type: "select",
            required: true,
            label: "Status",
            defaultValue: "Waiting",
            options: [
                { label: "Waiting", value: "Waiting" },
                { label: "Rejected", value: "Rejected" },
                { label: "Accepted", value: "Accepted" }
            ]
        }
    ],
    hooks: {
        afterOperation: [
            async (args) => {
                if (args.operation === "update") {
                    const previousData = args.previousData;
                    const updatedData = args.updatedData;

                    if (
                        previousData &&
                        updatedData &&
                        previousData.Status !== updatedData.Status &&
                        previousData.Status === "Waiting" &&
                        updatedData.Status === "Accepted"
                    ) {
                        console.log("Status telah berubah dari Waiting menjadi Accepted");
                    }
                }
            },
        ],
    }
};

export default Log;
