type DataType = {
    id: number,
    title: string,
    description: string,
    price: string,
    features: {
        id: number
        feature: string,
        available: boolean
    }[]
}[]
export const priceData: DataType = [
    {
        id: 1,
        title: "Company Profile",
        description: "Solusi tepat untuk profil perusahaan",
        price: "Rp. 2.000.000",
        features: [
            { id: 1, feature: "Elegant Design", available: true },
            { id: 2, feature: "Domain .com/.id", available: true },
            { id: 3, feature: "Hosting Kencang", available: true },
            { id: 4, feature: "SEO Optimize", available: true },
            { id: 5, feature: "Full Support", available: true },
            { id: 6, feature: "Garansi 12 Bulan", available: true },
            { id: 7, feature: "Free Maintenance", available: true },
            { id: 8, feature: "Wordpress Teknologi", available: true },
        ]
    },
    {
        id: 2,
        title: "Toko Online",
        description: "Website e-commerce siap pakai",
        price: "Rp. 2.500.000",
        features: [
            { id: 1, feature: "Elegant Design", available: true },
            { id: 2, feature: "Domain .com/.id", available: true },
            { id: 3, feature: "Hosting Kencang", available: true },
            { id: 4, feature: "SEO Optimize", available: true },
            { id: 5, feature: "Full Support", available: true },
            { id: 6, feature: "Garansi 12 Bulan", available: true },
            { id: 7, feature: "Free Maintenance", available: true },
            { id: 8, feature: "Wordpress Teknologi", available: true },
            { id: 9, feature: "Pembayaran Otomatis", available: true },
            { id: 10, feature: "Hitung Ongkir", available: true },
        ]
    },
    {
        id: 3,
        title: "Custom Web",
        description: "Website kustom untuk bisnis besar",
        price: "Rp. 15.000.000",
        features: [
            { id: 1, feature: "New Teknologi", available: true },
            { id: 2, feature: "Domain .com/.id", available: true },
            { id: 3, feature: "Email custom", available: true },
            { id: 4, feature: "Free Maintenance 12 Bulan", available: true },
            { id: 5, feature: "Free Bug 6 Bulan", available: true },
            { id: 6, feature: "SEO Optimize", available: true },
        ]
    },
]