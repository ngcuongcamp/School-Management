


const announcements = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit",
        posted_time: "2025-01-01",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, expedita. Rerum, quidem facilis?",
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit",
        posted_time: "2025-01-01",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, expedita. Rerum, quidem facilis?",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit",
        posted_time: "2025-01-01",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, expedita. Rerum, quidem facilis?",
    },
    {
        id: 4,
        title: "Lorem ipsum dolor sit",
        posted_time: "2025-01-01",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, expedita. Rerum, quidem facilis?",
    },
]

const Announcements = () => {
    return (
        <div className="bg-white p-4 rounded-md">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Announcements</h1>
                <span className="text-xs text-gray-400">View All</span>
            </div>

            <div className="flex flex-col gap-4 mt-4">
                {announcements.slice(0, 3).map((announcement) => {
                    return (
                        <div key={announcement.id} className="odd:bg-lamaSkyLight even:bg-lamaYellowLight  rounded-md p-4">
                            <div className="flex items-center justify-between">
                                <h2 className="font-medium">{announcement.title}</h2>
                                <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                                    {announcement.posted_time}
                                </span>
                            </div>
                            <p className="text-sm text-gray-400 mt-1">
                                {announcement.description}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div >
    );
}

export default Announcements