/* Employee List Item Component for name and title props */

function EmployeeListItem({ name, title }) {

    return (

        <div className="EmployeeListItem">

            <div className="EmployeeAvatar"></div>

            <div className="EmployeeInfo">

                <p className="EmployeeName">{ name }</p>
                <p className="EmployeeTitle">{ title }</p>

            </div>

        </div>

    )

}

export default EmployeeListItem