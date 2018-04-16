import Vue from 'vue'
import Router from 'vue-router'

import newindex from '@/view/new/newindex'
import index from '@/view/index'
const Headline = resolve => require(['@/view/headline'], resolve)
const HeadlineDetails = resolve => require(['@/view/headline-details'], resolve)
const FindExpert = resolve => require(['@/view/findExpert'], resolve)
const Category = resolve => require(['@/view/category'], resolve)
const TutorDetails = resolve => require(['@/view/tutorDetails'], resolve)
const Listen = resolve => require(['@/view/listen'], resolve)
const ProblemDetails = resolve => require(['@/view/problemDetails'], resolve)
const AskQuickly = resolve => require(['@/view/ask-quickly'], resolve)
const Rewards = resolve => require(['@/view/rewards'], resolve)
const RewardDetails = resolve => require(['@/view/reward-details'], resolve)
const RewardWrap = resolve => require(['@/view/reward-wrap'], resolve)
const Purchase = resolve => require(['@/view/purchase'], resolve)
const CompleteList = resolve => require(['@/view/completeList'], resolve)
const AnswerToSubmit = resolve => require(['@/view/answerToSubmit'], resolve)
const Login = resolve => require(['@/view/login'], resolve)
import uhome from '@/view/uhome'
const edit = resolve => require(['@/view/edit'], resolve)
const answer = resolve => require(['@/view/answer'], resolve)
const question = resolve => require(['@/view/question'], resolve)
const openvip = resolve => require(['@/view/openvip'], resolve)
const publish = resolve => require(['@/view/publish'], resolve)
const totrue = resolve => require(['@/view/totrue'], resolve)
const novel = resolve => require(['@/view/novel'], resolve)
const resetPhone = resolve => require(['@/view/reset-phone'], resolve)
const ask = resolve => require(['@/view/ask'], resolve)
const help = resolve => require(['@/view/help'], resolve)
const set = resolve => require(['@/view/set'], resolve)
const talk = resolve => require(['@/view/talk'], resolve)
const stalkcon = resolve => require(['@/view/stalkcon'], resolve)
const stalkteacher = resolve => require(['@/view/stalkteacher'], resolve)
const shiting = resolve => require(['@/view/shiting'], resolve)
const allspeech = resolve => require(['@/view/allspeech'], resolve)
const showresult = resolve => require(['@/view/showresult'], resolve)
const myQuickask = resolve => require(['@/view/my-quickask'], resolve)
const SmalltalkComments = resolve => require(['@/view/SmalltalkComments'], resolve)

const yishangcheng = resolve => require(['@/view/yishangcheng'], resolve)

const daka = resolve => require(['@/view/daka/daka'], resolve)
const daka_info = resolve => require(['@/view/daka/daka_info'], resolve)
const xiangqin = resolve => require(['@/view/daka/xiangqin'], resolve)
const daka_rili = resolve => require(['@/view/daka/daka_rili'], resolve)
const toplist = resolve => require(['@/view/daka/toplist'], resolve)
const dodaka = resolve => require(['@/view/daka/dodaka'], resolve)
const jiaoxue = resolve => require(['@/view/jiaoxue/index'], resolve)
const Promote = resolve => require(['@/view/Promote'], resolve)
const yishangpin = resolve => require(['@/view/yishangpin'], resolve)
const yishangpin_add = resolve => require(['@/view/yishangpin_add'], resolve)
const job_index = resolve=>require(['@/view/job/index'],resolve)
const job_lists = resolve=>require(['@/view/job/lists'],resolve)
const job_info =resolve=>require(['@/view/job/info'],resolve)
const job_company =resolve=>require(['@/view/job/company'],resolve)
const homework_homework =resolve=>require(['@/view/homework/homework'],resolve)
const homework_lists = resolve=>require(['@/view/homework/lists'],resolve)
const homework_info = resolve=>require(['@/view/homework/info'],resolve)
const homework_index = resolve=>require(['@/view/homework/index'],resolve)
const new_lx = resolve=>require(['@/view/new/lx'],resolve)
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/new/lx',
      component: new_lx,
      meta: {
        title: '练习',
        oldfooter:true,
      }
    },
    {
      path: '/',
      component: newindex,
      meta: {
        title: '一元成才',
        oldfooter:true,
      }
    },
    {
      path: '/oldindex',
      component: index,
      meta: {
        title: '一元提升'
      }
    },
    {
      path: '/headline/:id',
      component: Headline,
      meta: {
        title: '一元成才资讯'
      }
    },
    {
      path: '/headline-details/:id',
      component: HeadlineDetails,
      meta: {
        title: '一元成才资讯'
      }
    },
    {
      path: '/findExpert',
      component: FindExpert,
      meta: {
        title: '一元成才'
      }
    },
    {
      path: '/category/:id',
      component: Category
    },
    {
      path: '/tutorDetails/:id',
      component: TutorDetails,
      meta: {
        title: ''
      }
    },
    {
      path: '/listen',
      component: Listen,
      meta: {
        title: '一元成才'
      }
    },
    {
      path: '/problemDetails/:id',
      component: ProblemDetails,
      meta: {
        title: '一元成才'
      }
    },
    {
      path: '/ask-quickly',
      component: AskQuickly,
      meta: {
        title: '一元成才'
      }
    },
    {
      path: '/rewards/:id',
      component: Rewards,
      meta: {
        title: '一元成才'
      }
    },
    {
      path: '/reward-details/:id',
      component: RewardDetails,
      meta: {
        title: '一元成才'
      }
    },
    {
      path: '/reward-wrap/:id',
      component: RewardWrap,
      meta: {
        title: '一元成才'
      }
    },
    {
      path: '/purchase',
      component: Purchase,
      meta: {
        title: '一元成才'
      }
    },
    {
      path: '/completeList/:type',
      component: CompleteList,
      meta: {
        title: '一元成才'
      }
    },
    {
      path: '/answerToSubmit',
      component: AnswerToSubmit,
      meta: {
        title: '一元成才'
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        title: '一元成才'
      }
    },
    {
      path: '/uhome',
      component: uhome,
      meta: {
        title: '一元成才'
      }
    },
    {
      path: '/edit',
      component: edit,
      meta: {
        title: '一元成才'
      }
    },
    {
      path: '/answer',
      component: answer,
      meta: {
        title: '一元成才'
      }
    },
    {
      path: '/question',
      component: question,
      meta: {
        title: '一元成才'
      }
    },
    {
      path: '/openvip',
      component: openvip,
      meta: {
        title: '一元成才'
      }
    },
    {
      path: '/publish',
      component: publish,
      meta: {
        title: '一元成才'
      }
    },
    {
      path: '/totrue',
      component: totrue,
      meta: {
        title: '一元成才'
      }
    },
    {
      path: '/novel',
      component: novel,
      meta: {
        title: '一元成才'
      }
    },
    {
      path: '/reset-phone',
      component: resetPhone,
      meta: {
        title: '一元成才'
      }
    },
    {
      path: '/ask',
      component: ask,
      meta: {
        title: '一元成才社区'
      }
    },
    {
      path: '/help',
      component: help,
      meta: {
        title: '一元成才'
      }
    },
    {
      path: '/set',
      component: set,
      meta: {
        title: '一元成才'
      }
    },
    {
      path: '/talk',
      component: talk,
      meta: {
        title: '一元成才教学'
      }
    },
    {
      path: '/stalkcon/:id',
      component: stalkcon,
      meta: {
        title: '一元成才教学'
      }
    },
    {
      path: '/stalkteacher/:id',
      component: stalkteacher,
      meta: {
        title: '一元成才教学'
      }
    },
    {
      path: '/shiting',
      component: shiting,
      meta: {
        title: '一元成才教学'
      }
    },
    {
      path: '/allspeech',
      component: allspeech,
      meta: {
        title: '一元成才教学'
      }
    },
    {
      path: '/showresult',
      component: showresult,
      meta: {
        title: '一元成才'
      }
    },
    {
      path: '/my-quickask/:id',
      component: myQuickask,
      meta: {
        title: '一元成才'
      }
    },
    {
      path: '/SmalltalkComments/:id',
      component: SmalltalkComments,
      meta: {
        title: '一元成才教学'
      }
    },
    {
      path: '/yishangcheng',
      component: yishangcheng,
      meta: {
        title: '一元商城',
        oldfooter:true,
      }
    },
    {
      path: '/daka/daka',
      component: daka,
      meta: {
        title: '去打卡'
      }
    },
    {
      path: '/daka/daka_info/:id',
      component: daka_info,
      meta: {
        title: '打卡'
      }
    },
    {
      path: '/daka/daka_rili/:id',
      component: daka_rili,
      meta: {
        title: '打卡日历'
      }
    },
    {
      path: '/daka/toplist/:id',
      component: toplist,
      meta: {
        title: '打卡排行榜'
      }
    },
    {
      path: '/daka/xiangqin/:id',
      component: xiangqin,
      meta: {
        title: '打卡详情'
      }
    },
    {
      path: '/daka/dodaka/:id',
      component: dodaka,
      meta: {
        title: '就打卡'
      }
    },
    {
      path: '/jiaoxue/index',
      component: jiaoxue,
      meta: {
        title: '教学'
      }
    },
    {
      path: '/Promote',
      component: Promote,
      meta: {
        title: '一元教学',
        oldfooter:true,
      }
    },
    {
      path: '/yishangpin/:id',
      component: yishangpin,
      meta: {
        title: '一元教学',
        oldfooter:true,
      }
    },
    {
      path: '/yishangcheng/add/:id',
      component: yishangpin_add,
      meta: {
        title: '我要发布商品',
        oldfooter:true,
        // vip:true
      }
    },
    {
      path: '/job/index',
      component: job_index,
      meta: {
        title: '一元招聘',
        oldfooter:true,
        // vip:true
      }
    },
    {
      path: '/job/lists/:id',
      component: job_lists,
      meta: {
        title: '招聘列表',
        oldfooter:true,
        // vip:true
      }
    },
    {
      path: '/job/info/:id',
      component: job_info,
      meta: {
        title: '招聘详情',
        oldfooter:true,
        // vip:true
      }
    },
    {
      path: '/job/company/:id',
      component: job_company,
      meta: {
        title: '公司详情',
        oldfooter:true,
        // vip:true
      }
    },
    {
      path: '/homework',
      component: homework_index,
      children:[
          {
            path: 'homework',
            component: homework_homework,
            meta: {
              title: '我的作业',
              oldfooter:true,
              // vip:true
            }
          },
          {
            path: 'lists/:id',
            component: homework_lists,
            meta: {
              title: '作业排行榜',
              oldfooter:true,
              // vip:true
            }
          },
          {
            path: 'info/:id',
            component: homework_info,
            meta: {
              title: '作业统计',
              oldfooter:true,
              // vip:true
            }
          },
      ]
    }, 
  ]
})

// 钩子函数、守卫
router.beforeEach((to,from,next)=>{
  // if (to.meta.vip) {
  //   // 判断用户有没有登录、是不是会员
  // }
    // 每一步都会执行这段代码
    router.app.$options.store.commit("setFooterStatus",!to.meta.oldfooter)
    next()
})

export default router