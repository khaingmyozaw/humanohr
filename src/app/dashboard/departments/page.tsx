import ComponentCard from '@/components/common/ComponentCard'
import PageBreadcrumb from '@/components/common/PageBreadCrumb'
import BasicTable from '@/components/table/BasicTable'

const page = () => {
  return (
    <div>
      <PageBreadcrumb pageTitle={'Departments'} />
      <div className="w-full">
          <BasicTable />
      </div>
    </div>
  )
}

export default page