import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";


export default function Index({auth, projects}) {
    return (
        <AuthenticatedLayout user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Projects</h2>}>
            
            <Head title="Projects" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <table>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Created Date</th>
                                <th>Due Date</th>
                                <th>Created By</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                                {projects.data.map((project)=> (
                                <tr>
                                    <td>{project.id}</td>
                                    <td>
                                        <img src={project.image_path} />
                                    </td>
                                    <td>{project.name}</td>
                                    <td>{project.status}</td>
                                    <td>{project.created_at}</td>
                                    <td>{project.due_date}</td>
                                    <td>{project.createdBy}</td>
                                    <td>
                                        
                                        <Link href={route("project.edit", project.id)}>
                                            Edit
                                        </Link>
                                    </td>
                                    <td>
                                        <Link href={route("project.destroy", project.id)}>
                                            Delete
                                        </Link>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                            </table>
                            <Pagination links={projects.meta.links}></Pagination>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}