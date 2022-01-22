import { shallowMount, mount } from '@vue/test-utils'

/* import components */
import ItemTask from '@/components/ItemTask.vue'

describe('ItemTask.vue', () => {
  it('checking props.task task', () => {
    
    const taskId = 1
    const taskTitle = "task"
    const taskCompleted = false

    const wrapper = mount(ItemTask, {
      propsData: {
        task: {
          id: taskId,
          title: taskTitle,
          completed: taskCompleted
        }
      }
    })

    const title = wrapper.find('.task-title')

    expect(title.text()).toBe(taskTitle)
    expect(wrapper.vm.task.id).toBe(taskId)
    expect(wrapper.vm.task.completed).toBe(taskCompleted)
  })
})
