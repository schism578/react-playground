describe(`Demonym Component`, () => {
    it('renders empty given no Demonym without errors', () => {
      const wrapper = shallow(<Demonym />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
})