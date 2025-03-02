interface SkillSectionProps<T> {
  title: string
  data: T[]
  renderItem: (item: T, index: number) => React.ReactNode
  gap?: number
}

const SkillSection = <T,>({
  title,
  data,
  renderItem,
  gap = 4,
}: SkillSectionProps<T>) => (
  <div>
    <h1 className="text-text-2 mb-5 text-lg">{title}</h1>
    <div className={`flex items-center w-full flex-wrap gap-${gap} px-2`}>
      {data.map((item, index) => renderItem(item, index))}
    </div>
  </div>
)

export default SkillSection
