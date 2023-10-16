import { ISellerRequestDTO, ISellerResponseDTO } from '../dto/sellerModel'
import { ISeller } from '@/domain/models/sellerModel'
import { http } from '../http/http'

const urlBack = process.env.VUE_APP_SELLER

export const leaveRepository = {
  async getAll(): Promise<ISeller[]> {
    try {
      const response = await http.get<ISellerResponseDTO[]>(`${urlBack}api/v1/sellers`)
        .then((data) => {
          return data.map((role: ISellerRequestDTO) => ({
            id: role.id, 
            name: role.name,
            identification: role.identification, 
            observations: role.observations, 
            status: role.status,
          }));
        });

      return response;
    } catch (e) {
      console.error('getAll Vendedores error', e);
      return [];
    }
  }
}
