import { httpAxios } from "@/helper/httpHelper";

export async function addIncident(incident) {
  const result = await httpAxios
    .post("/api/incidents", incident)
    .then((response) => response.data);
  return result;
}

export async function getIncidentsOfUser(userId) {
  const result = await httpAxios
    .get(`/api/users/${userId}/incidents`)
    .then((response) => response.data);
    
console.log(result)
  return result;
}


export async function deleteIncident(incidentId) {
  const result = await httpAxios
    .delete(`/api/incidents/${incidentId}`)
    .then((response) => response.data);
  return result;
}

};