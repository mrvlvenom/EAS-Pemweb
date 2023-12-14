import payload from 'payload';

/** @type {import('payload/types').CollectionConfig} */
const Registrasi = {
    slug : "Registrasi",
    access: {
        read : () => true,
        create : () => true,
        update : () => true,
        delete : () => true
    },
    admin : {
        useAsTitle : "title"
    },
    hooks: {
        afterOperation: [
            async (args) => {
                if (args.operation == "create") {
                    payload.create({
                        collection: "Log",
                        data: {
                            collectionName: "Registrasi",
                            action: "create",
                            timestamp: new Date(),
                        },
                    });
                } else if (args.operation == "update") {
                    payload.create({
                        collection: "Log",
                        data: {
                            collectionName: "Registrasi",
                            action: "update",
                            timestamp: new Date(),
                        },
                    });
                } else if (args.operation == "delete") {
                    payload.create({
                        collection: "Log",
                        data: {
                            collectionName: "Registrasi",
                            action: "delete",
                            timestamp: new Date(),
                        },
                    });
                }
            },
        ],
    },
    fields : [
        {
            name: "Nama",
            type: "text",
            required: true,
            label: "Nama    ",
        },
        {
            name: "Email",
            type: "text",
            required: true,
            label: "Email",
            unique: true 
        },
        {
            name: "AsalSekolah",
            type: "textarea",
            required: true,
            label: "Asal_Sekolah",
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
        },
        {
            name: "TanggalPendaftaran",
            type: "date",
            required: true,
            label: "Tanggal_Pendaftaran",
            admin: {
                date: {
                    pickerAppearance: 'dayOnly',
                    displayFormat: 'dd/MM/yyyy',
                },
            },
        },
    ],
}

export default Registrasi