import Client from "../../domain/client.entity";
import AddressClientDto from "../../domain/value-object/address-client.dto";
import AddClientUseCase from "./add-client.usecase";

const MockRepository = () => {
  return {
    add: jest.fn(),
    find: jest.fn(),
  };
};

describe("Add Client Usecase unit test", () => {
  it("should add a client", async () => {
    const repository = MockRepository();
    const usecase = new AddClientUseCase(repository);

    const input = {
      name: "Lucian",
      email: "lucian@123.com",
      document: "1234-5678",
      address: new AddressClientDto(
        "Rua 123",
        "99",
        "Casa Verde",
        "Criciúma",
        "SC",
        "88888-888"
      ),
    };
    const client = new Client(input);

    const result = await usecase.execute(client);
    expect(result.id).toBe(client.id.id)
    expect(result.name).toBe(client.name)
    expect(result.email).toBe(client.email)
    expect(result.document).toBe(client.document)
    expect(result.address.city).toBe(client.address.city)
  });
});
