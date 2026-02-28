# The healthcare app

### Tech stack
<ul>
  <li>Maven</li>
  <li>Spring Boot 4</li>
   <li>HyperSQL</li>
   <li>Spring Data JPA</li>
   <li>Angular 21</li>
</ul>

### Endpoints
Requests and responses will all be in JSON. The application will run at ``http://localhost:8080`` which the essential endpoints are:
<table>
  <tr>
    <td><b>Route</td>
    <td>Method</td>
    <td>Role</td>
    <td>Body/Params</b></td>
  </tr>
  
  <tr>
    <td>/auth/login</td>
    <td>POST</td>
    <td>User (practitioner) authentication. <i>Requires <b>Body</b></i>*</td>
    <td>username: string, <br/><br/>password: string</td>
  </tr>
  
  <tr>
    <td>/services/type</td>
    <td>POST</td>
    <td>save all services types. <i>Requires <b>Body</b></i>*</td>
    <td>list: List<ServiceTypeDto> </td>
  </tr>
  
  <tr>
    <td>/practitioners/{id}</td>
    <td>PUT</td>
    <td>Update an existing practitioner. <i>Requires <b>Body</b></i>*</td>
    <td>practitioner: PractitionerDto</td>
  </tr> 
  <tr>
    <td>/practitioners/findbyorg/{id}</td>
    <td>GET</td>
    <td>findByOrganization. </td>
    <td>-</td>
  </tr> 

  <tr>
    <td>/patients</td>
    <td>GET</td>
    <td>find all patients. <i>Requires <b>Params</b></i>*</td>
    <td>organization: string, <br/><br/>name: string, <br/><br/>unassigned: Boolean</td>
  </tr>  
  <tr>
    <td>/examinations</td>
    <td>GET</td>
    <td>find all examinations. <i>Requires <b>Params</b></i>*</td>
    <td>organization: string, <br/><br/>name: string, <br/><br/>serviceType: string, <br/><br/>priority: string, <br/><br/>status: string</td>
  </tr>
   <tr>
    <td>/examinations</td>
    <td>POST</td>
    <td>save. <i>Requires <b>Body</b></i>*</td>
    <td>examination: ExaminationDto</td>
  </tr>
     <tr>
    <td>/examinations/practitioners/find/{id}</td>
    <td>GET</td>
    <td>find practitioners by their corresponding examination. </td>
    <td>-</td>
  </tr>
  <tr>
    <td>/organizations</td>
    <td>GET</td>
    <td>find all organizations. <i>Requires <b>Params</b></i>*</td>
    <td>name: string, <br/><br/>orgType: string</td>
  </tr>    
  <tr>
    <td>/organizations/{id}</td>
    <td>PUT</td>
    <td>Update an existing organization. <i>Requires <b>Body</b></i>*</td>
    <td>organization: OrganizationDto</td>
  </tr> 
  <tr>
    <td>/organizations/find/{name}</td>
    <td>GET</td>
    <td>findByName. </td>
    <td>-</td>
  </tr> 



</table>
